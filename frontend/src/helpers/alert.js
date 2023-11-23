import toast from 'react-hot-toast';

// export const throwMsg = (text) => {
//   toast(text, {
//     icon: "📝",
//     style: {
//       width: "auto",
//       border: '2px solid var(--mdb-warning)',
//       padding: "10px",
//       color: 'var(--mdb-dark)',
//       fontWeight: 600
//     },
//     duration: 3000,
//     iconTheme: {
//       primary: 'var(--mdb-primary)',
//       secondary: 'var(--mdb-primary)',
//     },
//   })
// }

export const successToast = (text) => {
  toast.success(text, {
    style: {
      width: "auto",
      border: '2px solid var(--bs-success)',
      padding: "10px",
      color: 'var(--font-color)',
      fontWeight: 600
    },
    duration: 3500,
  });
}

export const errorToast = (text) => {
  toast.error(text, {
    style: {
      width: "auto",
      border: '2px solid var(--bs-danger)',
      padding: "10px",
      color: 'var(--font-color)',
      fontWeight: 600
    },
    duration: 3500,
  });
}