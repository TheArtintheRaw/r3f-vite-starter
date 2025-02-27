/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 desklamp.glb -d -I -R 512
Files: desklamp.glb [180.69KB] > desklamp.glb [34.96KB] (81%)
*/

import React, { useRef, useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/desklamp.glb')
  const instances = useMemo(
    () => ({
      Lampa: nodes.lamp_a_0,
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
      <instances.Lampa rotation={[-Math.PI / 2, 0, 0]} scale={0.038} />
    </group>
  )
}

useGLTF.preload('/models/items/desklamp.glb')
