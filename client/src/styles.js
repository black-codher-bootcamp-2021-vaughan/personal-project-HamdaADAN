import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles ((theme) => ({
    Container: {
      backgroundColor: theme.palette.pink,
      padding: theme.spacing(8,0,6)
    },
    icon: {
        marginRight: '20px',
    }, 
    buttons: {
        marginTop: '400px'
    },
    cardGrid: {
        padding: '20px 0'

    }, 
    card: {
        height: '100%',
        display:'flex',
        flexDirection: 'column'

    }, 
    cardMedia: {
        paddingTop: '56.25%'

    }, 
    cardContent: {
        flexGrow:1,

    }, 
    // root: {
    //     minHeight: '100vh',
    //     backgroundImage: `url(${process.env.PUBLIC_URL + '/public/logo.png'})`,

    // },
    

  
    }));
    
// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//       display: 'none',
//       [theme.breakpoints.up('sm')]: {
//         display: 'block',
//       },
//     },
//     search: {
//       position: 'relative',
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: alpha(theme.palette.common.white, 0.15),
//       '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//       },
//       marginLeft: 0,
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//       },
//     },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: '100%',
//       position: 'absolute',
//       pointerEvents: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     inputRoot: {
//       color: 'inherit',
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));
  

    export default useStyles;