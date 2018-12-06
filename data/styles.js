var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Nested Network Style",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(0,0,0)",
      "border-width" : 2.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "shape" : "ellipse",
      "width" : 60.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,255,255)",
      "border-color" : "rgb(0,0,0)",
      "height" : 40.0,
      "font-size" : 12,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(shared_name)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "background-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "border-color" : "rgb(0,102,204)"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "text-valign" : "bottom"
    }
  }, {
    "selector" : "node[has_nested_network]",
    "css" : {
      "color" : "rgb(0,102,204)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "line-color" : "rgb(64,64,64)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 1.0,
      "content" : "",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "BioPAX",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(0,0,0)",
      "border-width" : 2.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "shape" : "ellipse",
      "width" : 20.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,255,255)",
      "border-color" : "rgb(0,102,102)",
      "height" : 20.0,
      "font-size" : 12,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'BiochemicalReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'GeneticInteraction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Interaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TransportWithBiochemicalReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Conversion']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'ComplexAssembly']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Degradation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReactionRegulation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Control']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReaction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Modulation']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'MolecularInteraction']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Catalysis']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Transport']",
    "css" : {
      "width" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'SimplePhysicalEntity']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Rna']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'BiochemicalReaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'GeneticInteraction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Interaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TransportWithBiochemicalReaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Conversion']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'ComplexAssembly']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Protein']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "shape" : "diamond"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'RnaRegion']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Degradation']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReactionRegulation']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Control']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'PhysicalEntity']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'DnaRegion']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'SmallMolecule']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Dna']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReaction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Modulation']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'MolecularInteraction']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Catalysis']",
    "css" : {
      "shape" : "triangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Transport']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Protein-phosphorylated']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "background-color" : "rgb(255,255,255)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "border-color" : "rgb(0,102,102)"
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'BiochemicalReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'GeneticInteraction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Interaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TransportWithBiochemicalReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Conversion']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'ComplexAssembly']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Degradation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReactionRegulation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Control']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'TemplateReaction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Modulation']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'MolecularInteraction']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Catalysis']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Transport']",
    "css" : {
      "height" : 13.4
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(64,64,64)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(64,64,64)",
      "line-style" : "solid",
      "line-color" : "rgb(64,64,64)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 1.0,
      "content" : "",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_NONCOMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_OTHER']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_UNCOMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'cofactor']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_ALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'right']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_ALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'controlled']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'contains']",
    "css" : {
      "target-arrow-shape" : "circle"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_UNKMECH']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_IRREVERSIBLE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'INHIBITION_COMPETITIVE']",
    "css" : {
      "target-arrow-shape" : "tee"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_UNKMECH']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'ACTIVATION_NONALLOSTERIC']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Gradient1",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(204,204,204)",
      "border-width" : 0.0,
      "text-valign" : "bottom",
      "text-halign" : "right",
      "shape" : "ellipse",
      "width" : 30.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(0,0,0)",
      "border-color" : "rgb(0,0,0)",
      "height" : 30.0,
      "font-size" : 8,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "line-color" : "rgb(102,102,102)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 1.0,
      "content" : "",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Marquee",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(102,102,102)",
      "border-width" : 10.0,
      "text-valign" : "bottom",
      "text-halign" : "center",
      "shape" : "ellipse",
      "width" : 20.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(0,204,255)",
      "border-color" : "rgb(255,255,255)",
      "height" : 20.0,
      "font-size" : 12,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 8,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(255,255,255)",
      "color" : "rgb(102,102,102)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(255,255,255)",
      "line-style" : "dashed",
      "line-color" : "rgb(255,255,255)",
      "opacity" : 1.0,
      "target-arrow-shape" : "triangle",
      "width" : 2.0,
      "text-opacity" : 1.0,
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "BioPAX_SIF",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(0,0,0)",
      "border-width" : 2.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "shape" : "ellipse",
      "width" : 60.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,153,153)",
      "border-color" : "rgb(0,0,0)",
      "height" : 40.0,
      "font-size" : 12,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node[name = 'Sst.Chrna2.Ptgdr']",
    "css" : {
      "width" : 28.284
    }
  }, {
    "selector" : "node[name = 'Sst.Myh8.Fibin']",
    "css" : {
      "width" : 41.23
    }
  }, {
    "selector" : "node[name = 'Sst.Tac2.Tacstd2']",
    "css" : {
      "width" : 83.66
    }
  }, {
    "selector" : "node[name = 'Sst.Myh8.Etv1']",
    "css" : {
      "width" : 63.2455
    }
  }, {
    "selector" : "node[name = 'Sst.Calb2.Necab1']",
    "css" : {
      "width" : 45.82
    }
  }, {
    "selector" : "node[name = 'Sst.Esm1']",
    "css" : {
      "width" : 91.1
    }
  }, {
    "selector" : "node[name = 'Sst.Rxfp1.Eya1']",
    "css" : {
      "width" : 55.67
    }
  }, {
    "selector" : "node[name = 'Sst.Mme.Fam114a1']",
    "css" : {
      "width" : 51.0
    }
  }, {
    "selector" : "node[name = 'Sst.Calb2.Pdlim5']",
    "css" : {
      "width" : 130.0
    }
  }, {
    "selector" : "node[name = 'Sst.Nts']",
    "css" : {
      "width" : 60.0
    }
  }, {
    "selector" : "node[name = 'Sst.Crhr2.Efemp1']",
    "css" : {
      "width" : 92.19
    }
  }, {
    "selector" : "node[name = 'Sst.Tac1.Tacr3']",
    "css" : {
      "width" : 28.284
    }
  }, {
    "selector" : "node[name = 'Sst.Hpse.Sema3c']",
    "css" : {
      "width" : 77.45
    }
  }, {
    "selector" : "node[name = 'Sst.Chrna2.Glra3']",
    "css" : {
      "width" : 38.73
    }
  }, {
    "selector" : "node[name = 'Sst.Crh.4930553C11Rik']",
    "css" : {
      "width" : 34.64
    }
  }, {
    "selector" : "node[name = 'Sst.Chodl']",
    "css" : {
      "width" : 101.5
    }
  }, {
    "selector" : "node[name = 'Sst.Hpse.Cbln4']",
    "css" : {
      "width" : 131.1
    }
  }, {
    "selector" : "node[name = 'Sst.Rxfp1.Prdm8']",
    "css" : {
      "width" : 89.44
    }
  }, {
    "selector" : "node[name = 'Sst.Tac1.Htr1d']",
    "css" : {
      "width" : 38.73
    }
  }, {
    "selector" : "node[name = 'Sst.Nr2f2.Necab1']",
    "css" : {
      "width" : 44.72
    }
  }, {
    "selector" : "node[name = 'Sst.Tac2.Myh4']",
    "css" : {
      "width" : 26.46
    }
  }, {
    "selector" : "node[BIOPAX_TYPE = 'Complex']",
    "css" : {
      "shape" : "hexagon"
    }
  }, {
    "selector" : "node[name = 'Sst.Chrna2.Ptgdr']",
    "css" : {
      "background-color" : "rgb(255,179,7)"
    }
  }, {
    "selector" : "node[name = 'Sst.Myh8.Fibin']",
    "css" : {
      "background-color" : "rgb(255,128,17)"
    }
  }, {
    "selector" : "node[name = 'Sst.Tac2.Tacstd2']",
    "css" : {
      "background-color" : "rgb(191,130,25)"
    }
  }, {
    "selector" : "node[name = 'Sst.Myh8.Etv1']",
    "css" : {
      "background-color" : "rgb(214,195,0)"
    }
  }, {
    "selector" : "node[name = 'Sst.Calb2.Necab1']",
    "css" : {
      "background-color" : "rgb(191,72,13)"
    }
  }, {
    "selector" : "node[name = 'Sst.Esm1']",
    "css" : {
      "background-color" : "rgb(193,19,49)"
    }
  }, {
    "selector" : "node[name = 'Sst.Rxfp1.Eya1']",
    "css" : {
      "background-color" : "rgb(153,76,0)"
    }
  }, {
    "selector" : "node[name = 'Sst.Mme.Fam114a1']",
    "css" : {
      "background-color" : "rgb(255,187,51)"
    }
  }, {
    "selector" : "node[name = 'Sst.Calb2.Pdlim5']",
    "css" : {
      "background-color" : "rgb(204,109,61)"
    }
  }, {
    "selector" : "node[name = 'Sst.Nts']",
    "css" : {
      "background-color" : "rgb(168,17,17)"
    }
  }, {
    "selector" : "node[name = 'Sst.Crhr2.Efemp1']",
    "css" : {
      "background-color" : "rgb(185,85,65)"
    }
  }, {
    "selector" : "node[name = 'Sst.Tac1.Tacr3']",
    "css" : {
      "background-color" : "rgb(176,100,17)"
    }
  }, {
    "selector" : "node[name = 'Sst.Hpse.Sema3c']",
    "css" : {
      "background-color" : "rgb(191,159,0)"
    }
  }, {
    "selector" : "node[name = 'Sst.Chrna2.Glra3']",
    "css" : {
      "background-color" : "rgb(255,159,44)"
    }
  }, {
    "selector" : "node[name = 'Sst.Crh.4930553C11Rik']",
    "css" : {
      "background-color" : "rgb(199,119,103)"
    }
  }, {
    "selector" : "node[name = 'Sst.Chodl']",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "node[name = 'Sst.Hpse.Cbln4']",
    "css" : {
      "background-color" : "rgb(128,107,25)"
    }
  }, {
    "selector" : "node[name = 'Sst.Rxfp1.Prdm8']",
    "css" : {
      "background-color" : "rgb(128,38,0)"
    }
  }, {
    "selector" : "node[name = 'Sst.Tac1.Htr1d']",
    "css" : {
      "background-color" : "rgb(128,72,17)"
    }
  }, {
    "selector" : "node[name = 'Sst.Nr2f2.Necab1']",
    "css" : {
      "background-color" : "rgb(255,223,17)"
    }
  }, {
    "selector" : "node[name = 'Sst.Tac2.Myh4']",
    "css" : {
      "background-color" : "rgb(217,197,102)"
    }
  }, {
    "selector" : "node[name = 'Sst.Chrna2.Ptgdr']",
    "css" : {
      "height" : 28.284
    }
  }, {
    "selector" : "node[name = 'Sst.Myh8.Fibin']",
    "css" : {
      "height" : 41.23
    }
  }, {
    "selector" : "node[name = 'Sst.Tac2.Tacstd2']",
    "css" : {
      "height" : 83.66
    }
  }, {
    "selector" : "node[name = 'Sst.Myh8.Etv1']",
    "css" : {
      "height" : 63.2455
    }
  }, {
    "selector" : "node[name = 'Sst.Calb2.Necab1']",
    "css" : {
      "height" : 45.82
    }
  }, {
    "selector" : "node[name = 'Sst.Esm1']",
    "css" : {
      "height" : 91.1
    }
  }, {
    "selector" : "node[name = 'Sst.Rxfp1.Eya1']",
    "css" : {
      "height" : 55.67
    }
  }, {
    "selector" : "node[name = 'Sst.Mme.Fam114a1']",
    "css" : {
      "height" : 51.0
    }
  }, {
    "selector" : "node[name = 'Sst.Calb2.Pdlim5']",
    "css" : {
      "height" : 130.0
    }
  }, {
    "selector" : "node[name = 'Sst.Nts']",
    "css" : {
      "height" : 60.0
    }
  }, {
    "selector" : "node[name = 'Sst.Crhr2.Efemp1']",
    "css" : {
      "height" : 92.19
    }
  }, {
    "selector" : "node[name = 'Sst.Tac1.Tacr3']",
    "css" : {
      "height" : 28.284
    }
  }, {
    "selector" : "node[name = 'Sst.Hpse.Sema3c']",
    "css" : {
      "height" : 77.45
    }
  }, {
    "selector" : "node[name = 'Sst.Chrna2.Glra3']",
    "css" : {
      "height" : 38.73
    }
  }, {
    "selector" : "node[name = 'Sst.Crh.4930553C11Rik']",
    "css" : {
      "height" : 34.64
    }
  }, {
    "selector" : "node[name = 'Sst.Chodl']",
    "css" : {
      "height" : 101.5
    }
  }, {
    "selector" : "node[name = 'Sst.Hpse.Cbln4']",
    "css" : {
      "height" : 131.1
    }
  }, {
    "selector" : "node[name = 'Sst.Rxfp1.Prdm8']",
    "css" : {
      "height" : 89.44
    }
  }, {
    "selector" : "node[name = 'Sst.Tac1.Htr1d']",
    "css" : {
      "height" : 38.73
    }
  }, {
    "selector" : "node[name = 'Sst.Nr2f2.Necab1']",
    "css" : {
      "height" : 44.72
    }
  }, {
    "selector" : "node[name = 'Sst.Tac2.Myh4']",
    "css" : {
      "height" : 26.46
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "line-color" : "rgb(0,0,0)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 4.0,
      "content" : "",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'interacts-with']",
    "css" : {
      "line-color" : "rgb(0,85,0)",
      "target-arrow-color" : "rgb(0,85,0)",
      "source-arrow-color" : "rgb(0,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'chemical-affects']",
    "css" : {
      "line-color" : "rgb(240,144,0)",
      "target-arrow-color" : "rgb(240,144,0)",
      "source-arrow-color" : "rgb(240,144,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-state-change-of']",
    "css" : {
      "line-color" : "rgb(0,0,192)",
      "target-arrow-color" : "rgb(0,0,192)",
      "source-arrow-color" : "rgb(0,0,192)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of']",
    "css" : {
      "line-color" : "rgb(112,0,0)",
      "target-arrow-color" : "rgb(112,0,0)",
      "source-arrow-color" : "rgb(112,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'consumption-controled-by']",
    "css" : {
      "line-color" : "rgb(255,51,0)",
      "target-arrow-color" : "rgb(255,51,0)",
      "source-arrow-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[interaction = 'reacts-with']",
    "css" : {
      "line-color" : "rgb(0,255,0)",
      "target-arrow-color" : "rgb(0,255,0)",
      "source-arrow-color" : "rgb(0,255,0)"
    }
  }, {
    "selector" : "edge[interaction = 'neighbor-of']",
    "css" : {
      "line-color" : "rgb(0,170,0)",
      "target-arrow-color" : "rgb(0,170,0)",
      "source-arrow-color" : "rgb(0,170,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-expression-of']",
    "css" : {
      "line-color" : "rgb(0,160,160)",
      "target-arrow-color" : "rgb(0,160,160)",
      "source-arrow-color" : "rgb(0,160,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-phosphorylation-of']",
    "css" : {
      "line-color" : "rgb(0,0,255)",
      "target-arrow-color" : "rgb(0,0,255)",
      "source-arrow-color" : "rgb(0,0,255)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of-chemical']",
    "css" : {
      "line-color" : "rgb(160,0,0)",
      "target-arrow-color" : "rgb(160,0,0)",
      "source-arrow-color" : "rgb(160,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'used-to-produce']",
    "css" : {
      "line-color" : "rgb(247,85,0)",
      "target-arrow-color" : "rgb(247,85,0)",
      "source-arrow-color" : "rgb(247,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'in-complex-with']",
    "css" : {
      "line-color" : "rgb(240,0,160)",
      "target-arrow-color" : "rgb(240,0,160)",
      "source-arrow-color" : "rgb(240,0,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-production-of']",
    "css" : {
      "line-color" : "rgb(0,204,240)",
      "target-arrow-color" : "rgb(0,204,240)",
      "source-arrow-color" : "rgb(0,204,240)"
    }
  }, {
    "selector" : "edge[interaction = 'catalysis-precedes']",
    "css" : {
      "line-color" : "rgb(112,0,160)",
      "target-arrow-color" : "rgb(112,0,160)",
      "source-arrow-color" : "rgb(112,0,160)"
    }
  }, {
    "selector" : "edge[zj_ambiguity_mat_som_mat > 127.39523435]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[zj_ambiguity_mat_som_mat = 127.39523435]",
    "css" : {
      "width" : 65.74627176920573
    }
  }, {
    "selector" : "edge[zj_ambiguity_mat_som_mat > 1][zj_ambiguity_mat_som_mat < 127.39523435]",
    "css" : {
      "width" : "mapData(zj_ambiguity_mat_som_mat,1,127.39523435,0.0,65.74627176920573)"
    }
  }, {
    "selector" : "edge[zj_ambiguity_mat_som_mat = 1]",
    "css" : {
      "width" : 0.0
    }
  }, {
    "selector" : "edge[zj_ambiguity_mat_som_mat < 1]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[interaction = 'interacts-with']",
    "css" : {
      "line-color" : "rgb(0,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'chemical-affects']",
    "css" : {
      "line-color" : "rgb(240,144,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-state-change-of']",
    "css" : {
      "line-color" : "rgb(0,0,192)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of']",
    "css" : {
      "line-color" : "rgb(112,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'consumption-controled-by']",
    "css" : {
      "line-color" : "rgb(255,51,0)"
    }
  }, {
    "selector" : "edge[interaction = 'reacts-with']",
    "css" : {
      "line-color" : "rgb(0,255,0)"
    }
  }, {
    "selector" : "edge[interaction = 'neighbor-of']",
    "css" : {
      "line-color" : "rgb(0,170,0)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-expression-of']",
    "css" : {
      "line-color" : "rgb(0,160,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-phosphorylation-of']",
    "css" : {
      "line-color" : "rgb(0,0,255)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of-chemical']",
    "css" : {
      "line-color" : "rgb(160,0,0)"
    }
  }, {
    "selector" : "edge[interaction = 'used-to-produce']",
    "css" : {
      "line-color" : "rgb(247,85,0)"
    }
  }, {
    "selector" : "edge[interaction = 'in-complex-with']",
    "css" : {
      "line-color" : "rgb(240,0,160)"
    }
  }, {
    "selector" : "edge[interaction = 'controls-production-of']",
    "css" : {
      "line-color" : "rgb(0,204,240)"
    }
  }, {
    "selector" : "edge[interaction = 'catalysis-precedes']",
    "css" : {
      "line-color" : "rgb(112,0,160)"
    }
  }, {
    "selector" : "edge[zj_ambiguity_mat_som_mat > 128]",
    "css" : {
      "opacity" : 0.00392156862745098
    }
  }, {
    "selector" : "edge[zj_ambiguity_mat_som_mat = 128]",
    "css" : {
      "opacity" : 3.9490196078431374
    }
  }, {
    "selector" : "edge[zj_ambiguity_mat_som_mat > 1][zj_ambiguity_mat_som_mat < 128]",
    "css" : {
      "opacity" : "mapData(zj_ambiguity_mat_som_mat,1,128,0,1007)"
    }
  }, {
    "selector" : "edge[zj_ambiguity_mat_som_mat = 1]",
    "css" : {
      "opacity" : 0.0
    }
  }, {
    "selector" : "edge[zj_ambiguity_mat_som_mat < 1]",
    "css" : {
      "opacity" : 0.00392156862745098
    }
  }, {
    "selector" : "edge[interaction = 'controls-expression-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'chemical-affects']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-state-change-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-phosphorylation-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of-chemical']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'used-to-produce']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-transport-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'consumption-controled-by']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'controls-production-of']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge[interaction = 'catalysis-precedes']",
    "css" : {
      "target-arrow-shape" : "triangle"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "size_rank",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(51,51,51)",
      "border-width" : 0.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "shape" : "rectangle",
      "width" : 12.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(204,204,255)",
      "border-color" : "rgb(0,0,0)",
      "height" : 12.0,
      "font-size" : 9,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "line-color" : "rgb(76,76,76)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 2.0,
      "content" : "",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default black",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(204,204,204)",
      "border-width" : 0.0,
      "text-valign" : "bottom",
      "text-halign" : "right",
      "shape" : "ellipse",
      "width" : 15.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,255,255)",
      "border-color" : "rgb(0,153,0)",
      "height" : 15.0,
      "font-size" : 12,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "line-color" : "rgb(0,153,0)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 2.0,
      "content" : "",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Big Labels",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(51,51,51)",
      "border-width" : 0.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "shape" : "ellipse",
      "width" : 5.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,255,255)",
      "border-color" : "rgb(0,0,0)",
      "height" : 5.0,
      "font-size" : 24,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "line-color" : "rgb(183,183,183)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 1.0,
      "content" : "",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Ripple",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(19,58,96)",
      "border-width" : 20.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "shape" : "ellipse",
      "width" : 50.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,255,255)",
      "border-color" : "rgb(51,153,255)",
      "height" : 50.0,
      "font-size" : 8,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,204)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "line-color" : "rgb(51,153,255)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 3.0,
      "content" : "",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Universe",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(255,255,255)",
      "border-width" : 0.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "shape" : "ellipse",
      "width" : 40.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(0,0,0)",
      "border-color" : "rgb(0,0,0)",
      "height" : 40.0,
      "font-size" : 18,
      "font-family" : "Monospaced.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "dashed",
      "line-color" : "rgb(153,153,153)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 2.0,
      "content" : "",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Solid",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(0,0,0)",
      "border-width" : 0.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "shape" : "ellipse",
      "width" : 40.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(102,102,102)",
      "border-color" : "rgb(0,0,0)",
      "height" : 40.0,
      "font-size" : 14,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "line-color" : "rgb(204,204,204)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 12.0,
      "text-opacity" : 1.0,
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Curved",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(102,102,102)",
      "border-width" : 7.0,
      "text-valign" : "bottom",
      "text-halign" : "right",
      "shape" : "ellipse",
      "width" : 18.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(254,196,79)",
      "border-color" : "rgb(255,255,255)",
      "height" : 18.0,
      "font-size" : 14,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(255,255,255)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(255,255,255)",
      "line-style" : "solid",
      "line-color" : "rgb(255,255,255)",
      "opacity" : 1.0,
      "target-arrow-shape" : "triangle",
      "width" : 3.0,
      "content" : "",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Directed",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(51,153,255)",
      "border-width" : 5.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "shape" : "ellipse",
      "width" : 45.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,255,255)",
      "border-color" : "rgb(145,145,145)",
      "height" : 45.0,
      "font-size" : 8,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,0,102)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 12,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(204,204,204)",
      "color" : "rgb(51,153,255)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(204,204,204)",
      "line-style" : "solid",
      "line-color" : "rgb(204,204,204)",
      "opacity" : 1.0,
      "target-arrow-shape" : "triangle",
      "width" : 5.0,
      "text-opacity" : 1.0,
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(0,0,0)",
      "border-width" : 0.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "shape" : "roundrectangle",
      "width" : 75.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(137,208,245)",
      "border-color" : "rgb(204,204,204)",
      "height" : 35.0,
      "font-size" : 12,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "line-color" : "rgb(132,132,132)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 2.0,
      "content" : "",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Minimal",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(51,51,51)",
      "border-width" : 0.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "shape" : "rectangle",
      "width" : 42.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,255,255)",
      "border-color" : "rgb(0,0,0)",
      "height" : 42.0,
      "font-size" : 9,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "line-color" : "rgb(76,76,76)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 2.0,
      "content" : "",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample1",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(51,51,51)",
      "border-width" : 0.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "shape" : "ellipse",
      "width" : 25.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(127,205,187)",
      "border-color" : "rgb(0,0,0)",
      "height" : 25.0,
      "font-size" : 10,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(51,51,51)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "line-color" : "rgb(153,153,153)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 1.0,
      "text-opacity" : 1.0,
      "content" : "data(interaction)"
    }
  }, {
    "selector" : "edge[interaction = 'pp']",
    "css" : {
      "line-style" : "solid"
    }
  }, {
    "selector" : "edge[interaction = 'pd']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample3",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(206,206,206)",
      "border-width" : 8.0,
      "text-valign" : "bottom",
      "text-halign" : "right",
      "shape" : "ellipse",
      "width" : 20.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(61,154,255)",
      "border-color" : "rgb(255,255,255)",
      "height" : 20.0,
      "font-size" : 14,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "line-color" : "rgb(255,255,255)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 2.0,
      "content" : "",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
}, {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.7.0",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "Sample2",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "color" : "rgb(102,102,102)",
      "border-width" : 15.0,
      "text-valign" : "center",
      "text-halign" : "right",
      "shape" : "ellipse",
      "width" : 50.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(58,127,182)",
      "border-color" : "rgb(255,255,255)",
      "height" : 50.0,
      "font-size" : 20,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "target-arrow-color" : "rgb(0,0,0)",
      "color" : "rgb(0,0,0)",
      "source-arrow-shape" : "none",
      "source-arrow-color" : "rgb(0,0,0)",
      "line-style" : "solid",
      "line-color" : "rgb(255,255,255)",
      "opacity" : 1.0,
      "target-arrow-shape" : "none",
      "width" : 20.0,
      "content" : "",
      "text-opacity" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]