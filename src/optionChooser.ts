const keypress = require('keypress');
keypress(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();
require('draftlog').into(console).addLineListener(process.stdin);

declare global {
    interface Console {
        draft: any
    }
}

export class optionChooser {
    private options: string[];
    private callback: (choseIndex: number, choseName: string) => any;
    private drafts: ((mes: string) => any)[];
    private current: number = 0;
    private buf: number = 0;
    keys: any;

    constructor(options: string[], callback: (choseIndex: number, choseName: string) => any) {
        this.options = options;
        this.callback = callback;
        this.drafts = options.map((value, key) => {
            return console.draft(`${key === this.current ? "❯" : " "} ${value}`);
        })
        process.stdin.on('keypress', this.onPressedHandler);
    }

    private onPressedHandler = (ch, key) => {
        if (key.name === "down" && this.current < this.options.length - 1) {
            this.current += 1;
        }
        if (key.name === "up" && this.current > 0) {
            this.current -= 1;
        }
        if (key.name === "return") {
            this.callback(this.current, this.options[this.current]);
            process.stdin.removeListener("keypress", this.onPressedHandler);
            process.stdin.setRawMode(false);
            return;
        }
        this.update(this.buf);
        this.update(this.current);
        this.buf = this.current;
        if (key && key.ctrl && key.name == 'c') {
            process.stdin.pause();
        }
    }

    private update = (num: number) => {
        this.drafts[num](`${num === this.current ? "❯" : " "} ${this.options[num]}`);
    }
}
