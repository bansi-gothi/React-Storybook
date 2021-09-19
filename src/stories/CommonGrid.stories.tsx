import React from 'react';
import { Story, Meta } from "@storybook/react/types-6-0";
import { Grid } from "@mui/material";

import { CommonGrid, CommonGridType } from "../component/CommonGrid";

import { SimpleCardLayout } from "../component/shared/SimpleCardLayout";
import { SliderLayout } from "../component/shared/SliderLayout";

export default {
    title: "Grid",
    component: CommonGrid,
} as Meta;

const Template: Story<CommonGridType> = (args) => <CommonGrid {...args} />;

export const ItemCardTemplate = Template.bind({});
export const ItemSliderTemplate = Template.bind({});

ItemCardTemplate.args = {
    children: (
        <Grid
            container
            columnSpacing={2}
            rowSpacing={3}
        >
            <SimpleCardLayout />
            <SimpleCardLayout />
            <SimpleCardLayout />
            <SimpleCardLayout />
            <SimpleCardLayout />
            <SimpleCardLayout />
        </Grid>
    ),
};

ItemSliderTemplate.args = {
    children: (
        <SliderLayout>
            <SimpleCardLayout />
            <SimpleCardLayout />
            <SimpleCardLayout />
            <SimpleCardLayout />
            <SimpleCardLayout />
        </SliderLayout>
    )
}