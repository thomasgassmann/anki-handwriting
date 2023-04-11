import { createHanziWriter } from './shared';

createHanziWriter({
    showOutline: false,
    showHintAfterMisses: 3,
    drawingWidth: 35,
    strokeColor: '#000'
}).quiz();
