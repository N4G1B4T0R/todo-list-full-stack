import { ThemeProvider } from '@mui/material/styles';
import { theme } from './app/app-theme.js';
import { TodoList } from './modules/todo-list';
import ToDos from './assets/ToDos.svg';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { TodoProvider } from './modules/todo-list/store/todo-provider.jsx';
import { AppContainer } from '@/app.styles.jsx';

const App = () => (
  <TodoProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <Box
          display="flex"
          justifyContent="center"
          mb={{
            xs: '24px',
            md: '90px'
          }}>
          <img src={ToDos} alt="ToDos" />
        </Box>
        <TodoList />
      </AppContainer>
    </ThemeProvider>
  </TodoProvider>
);

export default App;
