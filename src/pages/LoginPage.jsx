import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import { FaLock } from 'react-icons/fa';
import {Formik,Form} from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  return (
    <div>
      <Container maxWidth="sm" sx={{ mt: '10rem', textAlign: 'center' }}>
        <Avatar
          sx={{
            backgroundColor: 'primary.main',
            m: 'auto',
            width: 60,
            height: 60,
          }}
          sizes="100px"
        >
          <FaLock size="40" />
        </Avatar>
        <Typography variant="h4" align="center" mb={4} color="primary.light">
          Login
        </Typography>

        <Formik initialValues={{fullName:"",email:"",password:""}}
        validationSchema={Yup.object().shape({
          fullName: Yup.string().max(15,"Name is too long").required("Name is required"),
          email: Yup.string().email("Email is invalid").required("Email is required"),
          password: Yup.string().min(6,"Password is too short").max(12).matches(/\d+/,"Password is includes number").matches(/[a-z]+/,"Password is includes small letter").matches(/[A-Z]+/,"Password is includes large letter").matches(/[!,?{}><%&$#£+-.]+/, 'Sifreniz ozel karakter icermelidir').required("Password is required")
        })}
        onSubmit={(values,actions)=>{
          alert(`${values.fullName} ${values.email} ${values.password}`)
          actions.resetForm()
          actions.setSubmitting(false)

        }}
        >
          {({values,handleChange,errors,touched,handleBlur})=>(
        <Form>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <TextField
            label="Full Name"
            name="fullName"
            id="fullName"
            type="text"
            variant="outlined"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.fullName && Boolean(errors.fullName)}
            helperText={touched.fullName && errors.fullName}
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
          />
          <TextField
            label="password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
          />
          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Box>
        </Form>
        )}
        </Formik>
      </Container>
    </div>
  );
};

export default LoginPage;
