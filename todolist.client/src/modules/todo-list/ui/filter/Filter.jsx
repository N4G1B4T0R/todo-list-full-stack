import { useState } from 'react';
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import { useTodos } from '@/modules/todo-list/store/todo-provider.jsx';

export const Filter = () => {
  const { fetchTodos } = useTodos();
  const [isComplete, setIsComplete] = useState('');

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setIsComplete(value);
    onFilterChange(value === '' ? null : value === 'true');
  };

  const onFilterChange = (isComplete) => {
    fetchTodos(isComplete);
  };

  return (
    <Box mb="12px">
      <FormControl fullWidth>
        <Select
          value={isComplete}
          onChange={handleFilterChange}
          displayEmpty
          renderValue={(selected) => {
            if (selected === '') {
              return (
                <Typography
                  sx={{ fontSize: 20, textAlign: 'left', color: 'rgba(130, 130, 130, 1)' }}
                  variant="span">
                  Filter
                </Typography>
              );
            }
            return selected === 'true' ? 'Completed' : selected === 'false' ? 'Incomplete' : 'All';
          }}>
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="true">Completed</MenuItem>
          <MenuItem value="false">Incomplete</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
