import HanziWriter from 'hanzi-writer';
import characters from "./characters";
import definitions from "./definitions";

export const createHanziWriter = ({ showHintAfterMisses, drawingWidth, showOutline, strokeColor }: { showHintAfterMisses?: number, drawingWidth?: number, showOutline?: boolean, strokeColor?: string }): any => {
  document.getElementById("definition")!.innerHTML = definitions["{{Hanzi}}"];
  document.getElementById("pinyin")!.innerHTML = characters["{{Hanzi}}"];

  return HanziWriter.create("writing", "{{Hanzi}}", {
    width: 300,
    height: 300,
    showCharacter: false,
    delayBetweenStrokes: 500,
    padding: 5,
    strokeColor,
    showOutline,
    showHintAfterMisses,
    drawingWidth
  });
};
