export const agendaFormats = [
  'xerrada',
  'cineforum',
  'cercle-estudi',
  'debat',
  'taller',
  'jornada',
  'passejada',
  'manifestacio',
  'assemblea',
  'altres',
] as const;

export type AgendaFormat = (typeof agendaFormats)[number];

type BadgeTone =
  | 'red'
  | 'green'
  | 'mint'
  | 'strawberry'
  | 'neutral'
  | 'purple';

export const agendaFormatMeta: Record<
  AgendaFormat,
  {
    label: string;
    tone: BadgeTone;
  }
> = {
  xerrada: {
    label: 'Xerrada',
    tone: 'red',
  },
  cineforum: {
    label: 'Cinefòrum',
    tone: 'purple',
  },
  'cercle-estudi': {
    label: "Cercle d'estudi",
    tone: 'mint',
  },
  debat: {
    label: 'Debat',
    tone: 'strawberry',
  },
  taller: {
    label: 'Taller',
    tone: 'green',
  },
  jornada: {
    label: 'Jornada',
    tone: 'strawberry',
  },
  passejada: {
    label: 'Passejada',
    tone: 'mint',
  },
  manifestacio: {
    label: 'Mobilització',
    tone: 'red',
  },
  assemblea: {
    label: 'Assemblea',
    tone: 'green',
  },
  altres: {
    label: 'Altres',
    tone: 'neutral',
  },
};