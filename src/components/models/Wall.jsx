/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 wall.glb -d -I -R 512
Files: wall.glb [2.8KB] > wall.glb [1.26KB] (55%)
*/

import React, { useRef, useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/wall.glb')
  const instances = useMemo(
    () => ({
      Cube: nodes.Cube010,
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
      <instances.Cube />
    </group>
  )
}

useGLTF.preload('/models/items/wall.glb')