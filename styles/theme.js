import React from 'react';
import { theme as chakraTheme } from '@chakra-ui/core';

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700

  },
  icons: {
    ...chakraTheme.icons,
    logo: {
      path: (
        <path d="M350.39 264.5c-78.57 18.06-117.12 23.42-167.87 23.42-59.05 0-103.46-10.74-135.18-33.18C15.62 232.29 0 198.13 0 149.33 0 98.58 20.5 53.68 54.66 30.74 85.4 9.76 132.25 0 200.57 0c78.57 0 129.32 16.1 156.16 49.78 16.1 20.01 27.33 60.51 27.33 100.04 0 5.86-.49 13.66-.98 24.4H166.9c0 28.3 14.64 37.09 59.05 37.09 40.02 0 108.34-9.76 157.14-21.96l-32.7 75.15zm-93.21-153.23c-.49-13.66-1.95-19.52-6.83-27.33-7.32-11.22-22.45-18.06-40.02-18.06-31.23 0-46.36 13.66-50.75 45.38l97.6.01z"/>
      ),
      viewBox: '0 0 384.06 287.92'
    }

  }
};

export default theme