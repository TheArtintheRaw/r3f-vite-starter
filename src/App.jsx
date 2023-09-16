import React, { useMemo, Suspense, useEffect, useState } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { KeyboardControls, PointerLockControls, ScrollControls } from '@react-three/drei'
import { CharacterController } from './components/CharacterController'
import { Experience } from './components/Experience'
import { SocketManager, userAtom } from './components/SocketManager'
import { UI } from './components/UI'

import { useAtom } from 'jotai'

export const Controls = {
  forward: 'forward',
  back: 'back',
  left: 'left',
  right: 'right',
  jump: 'jump'
}

export default function App() {
  const [cameraMode, setCameraMode] = useState('orbit')
  const [shopMode, setShopMode] = useState(false)
  const [buildMode, setBuildMode] = useState(false)
  const [_user, setUser] = useAtom(userAtom)
  const localUserId = setUser(_user)

  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
      { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
      { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
      { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
      { name: Controls.jump, keys: ['Space'] }
    ],
    []
  )


  return (
    <>
      <SocketManager />
      <KeyboardControls map={map}>
        <Canvas frameloop="demand" dpr={1.5} shadows camera={{ position: [5, 25, 5], fov: 30 }}>
          <color attach="background" args={['#E5E5E5']} />
          <Suspense fallback={null}>
            <Physics colliders={false} debug>
              {cameraMode === 'firstPerson' ? <CharacterController /> : null}
              {cameraMode === 'firstPerson' ? <PointerLockControls /> : null}
              <ScrollControls pages={shopMode ? 4 : 0}>
                <Experience localUserId={localUserId} cameraMode={cameraMode} shopMode={shopMode} buildMode={buildMode} />
              </ScrollControls>
            </Physics>{' '}
          </Suspense>
        </Canvas>
      </KeyboardControls>
      <UI setCameraMode={setCameraMode} setShopMode={setShopMode} setBuildMode={setBuildMode} />
    </>
  )
}
