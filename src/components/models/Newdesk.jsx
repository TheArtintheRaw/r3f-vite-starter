/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 newdesk.glb -d -I -R 512
Files: newdesk.glb [558.88KB] > newdesk.glb [25.24KB] (95%)
*/

import React, { useRef, useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/newdesk.glb')
  const instances = useMemo(
    () => ({
      Object: nodes.Object_1,
      Object1: nodes.Object_1_1,
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
    </group>
  )
}

useGLTF.preload('/models/items/newdesk.glb')