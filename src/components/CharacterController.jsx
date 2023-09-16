import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import { PointerLockControls, useKeyboardControls } from '@react-three/drei'
import { Avatar } from './Avatar'
import { Controls } from '../App'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'

const JUMP_FORCE = 0.5
const MOVEMENT_SPEED = 0.1
const MAX_VEL = 3
const RUN_VEL = 1.5

export const CharacterController = () => {
  const { camera } = useThree()
  const jumpPressed = useKeyboardControls((state) => state[Controls.jump])
  const leftPressed = useKeyboardControls((state) => state[Controls.left])
  const rightPressed = useKeyboardControls((state) => state[Controls.right])
  const backPressed = useKeyboardControls((state) => state[Controls.back])
  const forwardPressed = useKeyboardControls((state) => state[Controls.forward])

  const avatarRef = useRef()
  const rigidbody = useRef()
  const isOnFloor = useRef(true)
  const character = useRef(Avatar)

  useFrame(() => {
    if (avatarRef.current && rigidbody.current) {
      const characterWorldPosition = avatarRef.current.getWorldPosition(new THREE.Vector3())
      camera.position.x = characterWorldPosition.x
      camera.position.y = characterWorldPosition.y + 1.9
      camera.position.z = characterWorldPosition.z

      const impulse = new THREE.Vector3()
      if (jumpPressed && isOnFloor.current) {
        impulse.y += JUMP_FORCE
        isOnFloor.current = false
      }

      const linvel = rigidbody.current.linvel()
      if (rightPressed && linvel.x < MAX_VEL) impulse.x += MOVEMENT_SPEED
      if (leftPressed && linvel.x > -MAX_VEL) impulse.x -= MOVEMENT_SPEED
      if (backPressed && linvel.z < MAX_VEL) impulse.z += MOVEMENT_SPEED
      if (forwardPressed && linvel.z > -MAX_VEL) impulse.z -= MOVEMENT_SPEED

      rigidbody.current.applyImpulse(impulse)
    }
  })
  useEffect(() => {
    console.log(characterWorldPosition)
  })

  const resetPosition = () => {
    rigidbody.current.setTranslation(vec3({ x: 0, y: 0, z: 0 }))
  }

  return (
    <group>
      <RigidBody>
        <group ref={avatarRef}>
          <Avatar key={avatarRef.id} />
        </group>
      </RigidBody>
    </group>
  )
}
