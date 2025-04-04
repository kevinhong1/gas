

import React from "react";
import { useGLTF } from "@react-three/drei";
import { convertMaterialsToBasic } from "../../utils/convertToBasic";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/Light Room/Light_Second.glb");

  const newMaterials = convertMaterialsToBasic(materials);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Light_Second_Baked.geometry}
        material={newMaterials.actual_second_bro_Baked}
        position={[26.719, 1.498, 1.614]}
        rotation={[0, 0, -Math.PI / 2]}
      />
    </group>
  );
}

useGLTF.preload("/models/Light Room/Light_Second.glb");
