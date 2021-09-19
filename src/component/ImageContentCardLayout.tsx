import { Card } from '@material-ui/core';

import { ImageCardLayout, ImageCardType } from './ImageCardLayout';

export const ImageContentCardLayout: React.FC<ImageCardType> = () => {
  return (
        <Card>
          <ImageCardLayout
          imageSrc="https://images.unsplash.com/photo-1631702926488-7db7e82b9049?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          imageAlt="ImageCard"
         />
          <span>Card1</span>
        </Card>
  );
}
