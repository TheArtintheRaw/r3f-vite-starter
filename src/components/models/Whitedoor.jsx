/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 whitedoor.glb -d -I -R 512
Files: whitedoor.glb [14.52MB] > whitedoor.glb [1.3MB] (91%)
*/

import React, { useRef, useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/whitedoor.glb')
  const instances = useMemo(
    () => ({
      Plane: nodes.Plane013,
      Plane1: nodes.Plane013_1,
      Plane2: nodes.Plane013_2,
      Plane3: nodes.Plane013_3,
      Plane4: nodes.Plane013_4,
    }),
    [nodes]
  )
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <context.Provider value={instances} children={children} />}
    </Merged>
  )
}

export function Model(props) {
  const instances = useContext(context)
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0.103]} scale={2.901}>
        <instances.Plane />
        <instances.Plane1 />
        <instances.Plane2 />
        <instances.Plane3 />
        <instances.Plane4 />
      </group>
    </group>
  )
}

useGLTF.preload('/models/items/whitedoor.glb')
