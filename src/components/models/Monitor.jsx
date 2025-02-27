/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 monitor.glb -d -I -R 512
Files: monitor.glb [72.44KB] > monitor.glb [10.42KB] (86%)
*/

import React, { useRef, useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/monitor.glb')
  const instances = useMemo(
    () => ({
      Object: nodes.Object_3001,
      Object1: nodes.Object_3001_1,
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
      <group position={[-0.288, 5.771, -0.489]} scale={[0.165, 0.031, 0.107]}>
        <instances.Object />
        <instances.Object1 />
      </group>
    </group>
  )
}

useGLTF.preload('/models/items/monitor.glb')
