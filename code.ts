if (figma.editorType === 'figma') {
  figma.showUI(__html__);

  figma.ui.onmessage = (msg) => {
    if (msg.type === 'create-shapes') {
    }
    figma.closePlugin();
  };
} else {
  figma.showUI(__html__);

  figma.ui.onmessage = (msg) => {
    if (msg.type === 'create-shapes') {
    }
    figma.closePlugin();
  };
}
