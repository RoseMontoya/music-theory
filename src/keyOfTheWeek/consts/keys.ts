export type MajorKey = 'cM' | 'gM' | 'dM' | 'aM' | 'eM' | 'bM' | 'fshM' | 'cshM'
                     | 'cflM' | 'gflM' | 'dflM' | 'aflM' | 'eflM' | 'bflM' | 'fM';

export type MinorKey = 'am' | 'em' | 'bm' | 'fshm' | 'cshm' | 'gshm' | 'dshm' | 'ashm'
                     | 'aflm' | 'eflm' | 'bflm' | 'fm' | 'cm' | 'gm' | 'dm';

export type keys = MajorKey | MinorKey;

type notes = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'A♭' | 'B♭' | 'C♭' | 'D♭' | 'E♭' | 'F♭' | 'G♭' | 'A#' | 'B#' | 'C#' | 'D#'  | 'E#' | 'F#' | 'G#'

export interface Key<Relative extends keys = keys> {
    title: string,
    notes: notes[],
    flatsCount: number,
    sharpsCount: number,
    aka: Relative
}

export const majorKeyConfig = {
    cM: { title: "C Major", notes: [ 'A', 'B', "C", "D", "E", "F", "G" ], flatsCount: 0, sharpsCount: 0, aka: 'am' },
    gM: { title: "G Major", notes: [ 'A', 'B', "C", "D", "E", "F#", "G" ], flatsCount: 0, sharpsCount: 1, aka: "em" },
    dM: { title: "D Major", notes: [ 'A', 'B', "C#", "D", "E", "F#", "G" ], flatsCount: 0, sharpsCount: 2, aka: "bm" },
    aM: { title: "A Major", notes: [ 'A', 'B', "C#", "D", "E", "F#", "G#" ], flatsCount: 0, sharpsCount: 3, aka: "fshm" },
    eM: { title: "E Major", notes: [ 'A', 'B', "C#", "D#", "E", "F#", "G#" ], flatsCount: 0, sharpsCount: 4, aka: "cshm" },
    bM: { title: "B Major", notes: [ 'A#', 'B', "C#", "D#", "E", "F#", "G#" ], flatsCount: 0, sharpsCount: 5, aka: 'gshm' },
    fshM: { title: "F# Major", notes: [ 'A#', 'B', "C#", "D#", "E#", "F#", "G#" ], flatsCount: 0, sharpsCount: 6, aka: "dshm" },
    cshM: { title: "C# Major", notes: [ 'A#', 'B#', "C#", "D#", "E#", "F#", "G#" ], flatsCount: 0, sharpsCount: 7, aka: "ashm" },
    cflM: { title: "C♭ Major", notes: [ 'A♭', 'B♭', "C♭", "D♭", "E♭", "F♭", "G♭" ], flatsCount: 7, sharpsCount: 0, aka: "aflm" },
    gflM: { title: "G♭ Major", notes: [ 'A♭', 'B♭', "C♭", "D♭", "E♭", "F", "G♭" ], flatsCount: 6, sharpsCount: 0, aka: "eflm" },
    dflM: { title: "D♭ Major", notes: [ 'A♭', 'B♭', "C", "D♭", "E♭", "F", "G♭" ], flatsCount: 5, sharpsCount: 0, aka: "bflm" },
    aflM: { title: "A♭ Major", notes: [ 'A♭', 'B♭', "C", "D♭", "E♭", "F", "G" ], flatsCount: 4, sharpsCount: 0, aka: "fm" },
    eflM: { title: "E♭ Major", notes: [ 'A♭', 'B♭', "C", "D", "E♭", "F", "G" ], flatsCount: 3, sharpsCount: 0, aka: "cm" },
    bflM: { title: "B♭ Major", notes: [ 'A', 'B♭', "C", "D", "E♭", "F", "G" ], flatsCount: 2, sharpsCount: 0, aka: "gm" },
    fM: { title: "F Major", notes: [ 'A', 'B♭', "C", "D", "E", "F", "G" ], flatsCount: 1, sharpsCount: 0, aka: "dm" },
} satisfies Record<MajorKey, Key<MinorKey>>;

export const minorKeyConfig = {
    am: { title: "A Minor", notes: [ 'A', 'B', "C", "D", "E", "F", "G" ], flatsCount: 0, sharpsCount: 0, aka: 'cM' },
    em: { title: "E Minor", notes: [ 'A', 'B', "C", "D", "E", "F#", "G" ], flatsCount: 0, sharpsCount: 1, aka: "gM" },
    bm: { title: "B Minor", notes: [ 'A', 'B', "C#", "D", "E", "F#", "G" ], flatsCount: 0, sharpsCount: 2, aka: "dM" },
    fshm: { title: "F# Minor", notes: [ 'A', 'B', "C#", "D", "E", "F#", "G#" ], flatsCount: 0, sharpsCount: 3, aka: "aM" },
    cshm: { title: "C# Minor", notes: [ 'A', 'B', "C#", "D#", "E", "F#", "G#" ], flatsCount: 0, sharpsCount: 4, aka: "eM" },
    gshm: { title: "G# Minor", notes: [ 'A#', 'B', "C#", "D#", "E", "F#", "G#" ], flatsCount: 0, sharpsCount: 5, aka: 'bM' },
    dshm: { title: "D# Minor", notes: [ 'A#', 'B', "C#", "D#", "E#", "F#", "G#" ], flatsCount: 0, sharpsCount: 6, aka: "fshM" },
    ashm: { title: "A# Minor", notes: [ 'A#', 'B#', "C#", "D#", "E#", "F#", "G#" ], flatsCount: 0, sharpsCount: 7, aka: "cshM" },
    aflm: { title: "A♭ Minor", notes: [ 'A♭', 'B♭', "C♭", "D♭", "E♭", "F♭", "G♭" ], flatsCount: 7, sharpsCount: 0, aka: "cflM" },
    eflm: { title: "E♭ Minor", notes: [ 'A♭', 'B♭', "C♭", "D♭", "E♭", "F", "G♭" ], flatsCount: 6, sharpsCount: 0, aka: "gflM" },
    bflm: { title: "B♭ Minor", notes: [ 'A♭', 'B♭', "C", "D♭", "E♭", "F", "G♭" ], flatsCount: 5, sharpsCount: 0, aka: "dflM" },
    fm: { title: "F Minor", notes: [ 'A♭', 'B♭', "C", "D♭", "E♭", "F", "G" ], flatsCount: 4, sharpsCount: 0, aka: "aflM" },
    cm: { title: "C Minor", notes: [ 'A♭', 'B♭', "C", "D", "E♭", "F", "G" ], flatsCount: 3, sharpsCount: 0, aka: "eflM" },
    gm: { title: "G Minor", notes: [ 'A', 'B♭', "C", "D", "E♭", "F", "G" ], flatsCount: 2, sharpsCount: 0, aka: "bflM" },
    dm: { title: "D Minor", notes: [ 'A', 'B♭', "C", "D", "E", "F", "G" ], flatsCount: 1, sharpsCount: 0, aka: "fM" },
} satisfies Record<MinorKey, Key<MajorKey>>;

export const keyConfig = { ...majorKeyConfig, ...minorKeyConfig } satisfies Record<keys, Key>;
