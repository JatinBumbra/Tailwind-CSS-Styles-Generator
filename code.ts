figma.showUI(__html__);

const textStyles = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
  '7xl': 72,
  '8xl': 96,
  '9xl': 128,
};

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generate') {
    const fontFamily = 'Poppins';
    // Get the desired fonts for the given family
    const desiredFonts = await (
      await figma.listAvailableFontsAsync()
    ).filter(
      (font) =>
        font.fontName.family === fontFamily &&
        !font.fontName.style.toLowerCase().includes('italic')
    );

    await Promise.all(
      Object.keys(textStyles).map((key) => {
        desiredFonts.forEach(async (font) => {
          await figma.loadFontAsync(font.fontName);

          const text = figma.createTextStyle();
          text.name =
            'tailwind/text/' + key + '/' + font.fontName.style.toLowerCase();
          text.fontName = font.fontName;
          // @ts-ignore
          text.fontSize = textStyles[key];
        });
      })
    );
  }
  // figma.closePlugin('Plugin Ran');
};
