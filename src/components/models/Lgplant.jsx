/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 lgplant.glb -d -I -R 512
Files: lgplant.glb [5.8MB] > lgplant.glb [924.61KB] (84%)
*/

import React, { useRef, useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/lgplant.glb')
  const instances = useMemo(
    () => ({
      LIVISTONACHINENSISLIVISTONACHINENSISMat: nodes.LIVISTONA_CHINENSIS_LIVISTONA_CHINENSIS_Mat_0,
      LIVISTONACHINENSISLIVISTONACHINENSISMat1: nodes.LIVISTONA_CHINENSIS_LIVISTONA_CHINENSIS_Mat_0_1,
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
      <instances.LIVISTONACHINENSISLIVISTONACHINENSISMat />
      <instances.LIVISTONACHINENSISLIVISTONACHINENSISMat1 />
    </group>
  )
}

useGLTF.preload('/models/items/lgplant.glb')
