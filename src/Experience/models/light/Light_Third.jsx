

import React from "react";
import { useGLTF } from "@react-three/drei";
import { convertMaterialsToBasic } from "../../utils/convertToBasic";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/Light Room/Light_Third.glb");

  const newMaterials = convertMaterialsToBasic(materials);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Light_Third_Baked.geometry}
        material={newMaterials.REAL_third_Baked}
        position={[24.79, -0.201, 0.173]}
      />
    </group>
  );
}

useGLTF.preload("/models/Light Room/Light_Third.glb");
