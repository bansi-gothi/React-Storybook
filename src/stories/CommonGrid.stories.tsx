import React from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";

import { CommonGrid, CommonGridType } from "../component/CommonGrid";
import { ImageContentCardLayout } from "../component/ImageContentCardLayout";

export default {
    title: "Grid",
    component: CommonGrid,
} as Meta;

const Template: Story<CommonGridType> = (args) => <CommonGrid {...args} />;

export const CommonGridLayout = Template.bind({});
export const ImageCardLayout = Template.bind({});

CommonGridLayout.args = {
    children: (
        <React.Fragment>
            <ImageContentCardLayout />
            <ImageContentCardLayout />
            <ImageContentCardLayout />
            <ImageContentCardLayout />
        </React.Fragment>
    ),
};
ImageCardLayout.args = {
    children: (
        <ImageContentCardLayout />
    )
}