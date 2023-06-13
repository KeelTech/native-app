import {useState} from 'react';
import {useColorScheme} from 'react-native';

const lightColors = {
  primary: '#24292F',
  secondary: '#FeFeFe',
  accent: 'rgba(215, 77, 92, 1)',
  background: '#F5F5F5',
  border: '#E8E8E8',
  error: 'rgba(215, 77, 92, 1)',
  grey: '#D4D4D4',
  regularText: '#57606A',
};

const darkColors = {
  primary: '#24292F',
  secondary: '#FeFeFe',
  accent: 'rgba(215, 77, 92, 1)',
  background: '#F5F5F5',
  border: '#D7D7D7',
  error: 'rgba(215, 77, 92, 1)',
  grey: '#D4D4D4',
  regularText: '#57606A',
};

const fonts = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
};

const useTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === isDarkMode ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  const colors = theme === 'dark' ? darkColors : lightColors;

  return {colors, fonts, currentTheme: theme, isDarkMode, toggleTheme};
};

export default useTheme;
