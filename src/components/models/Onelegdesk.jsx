/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 onelegdesk.glb -d -I -R 512
Files: onelegdesk.glb [391.85KB] > onelegdesk.glb [61.78KB] (84%)
*/

import React, { useRef, useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/onelegdesk.glb')
  const instances = useMemo(
    () => ({
      Object: nodes.Object_2,
      Object1: nodes.Object_2_1,
      Object2: nodes.Object_2_2,
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
      <instances.Object />
      <instances.Object1 />
      <instances.Object2 />
    </group>
  )
}

useGLTF.preload('/models/items/onelegdesk.glb')
