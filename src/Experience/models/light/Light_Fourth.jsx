

import React from "react";
import { useGLTFWithKTX2 } from "../../utils/useGLTFWithKTX2";
import { convertMaterialsToBasic } from "../../utils/convertToBasic";

export default function Model(props) {
  const { nodes, materials } = useGLTFWithKTX2(
    "/models/Light Room/Light_Fourth.glb"
  );

  const newMaterials = convertMaterialsToBasic(materials);

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Light_Fourth_Baked.geometry}
        material={newMaterials.REAL_fourth_Baked}
        position={[26.632, -0.17, -1.134]}
        rotation={[Math.PI, 0, Math.PI]}
      />
    </group>
  );
}
