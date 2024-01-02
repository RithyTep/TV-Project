export const STATUS_OBJ = {
  ACTIVE: { key: 1, name: 'active'}, // Gray
  DRAFT: { key: 2, name: 'draft' },
  PENDING: { key: 3, name: 'pending' },
  DISABLED: { key: 4, name: 'disabled' },
};
export const PHOTO_LIB = {
  EMPTY:
    'https://firebasestorage.googleapis.com/v0/b/sysanotta.appspot.com/o/no_image.svg?alt=media&token=f25af902-6c62-47e6-bdf3-48e3b0c6fe8c',
  EMPTY_PHOTO:
    'https://firebasestorage.googleapis.com/v0/b/ecpp-auxswot.appspot.com/o/photo%2Fempty_image.jpeg?alt=media&token=53a1095a-e2f4-48e7-930f-ded6be1eecc8',
  EMPTY_COVER: '/src/assets/images/GDI-Doc-Cover-2.jpg',
  PDF: 'https://firebasestorage.googleapis.com/v0/b/doccamwin.appspot.com/o/file_icons%2Fpdf.svg?alt=media&token=d7a5750b-410d-43e1-8bdc-17a698bfa3b8',
  EMPTY_PASSPORT: '',
};

export const PRIORITY_OBJECT = {
  NORMAL: { key: 1, color: '#f2f2f2', background: '#FAFAFA' },
  MEDIUM: { key: 2, color: '#A6FF96', background: '#BEF0CB' },
  HIGHT: { key: 3, color: '#F4E869', background: '#F5FCCD' },
  TOP: { key: 4, color: '#FE0000', background: '#FC4F4F' },
};

export const MESSAGE_TYPE = {
  text:{
    name: 'text',
    key:1,
  },
  attachment:{
    name: 'attachment',
    key:2,
  },
  voice:{
    name: 'voice',
    key:3,
  },
  link:{
    name: 'link',
    key: 4,
  }
}

export enum MessageType {
  Text = 'text',
  Link = 'link',  
}

export const TICKET_STATUS = {
  VOID: { key: -2, name: 'void', color: ''},
  HOLD: { key: -1, name: 'hold', color: ''},
  SUBMIT: { key: 1, name: 'submit', color: '#1a73e8' }, // Gray
  PROCESS: { key: 2, name: 'process', color: '#FFCC00' }, // Yellow
  DONE: { key: 3, name: 'done', color: '#00CC00' }, // Green
}
