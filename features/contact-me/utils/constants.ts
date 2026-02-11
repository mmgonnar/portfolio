export const formFIelds = [
  { name: 'name', label: 'Name', type: 'text', placeholder: '' },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'example@mail.com',
  },
  { name: 'message', label: 'Message', type: 'textarea', placeholder: '' },
] as const;
