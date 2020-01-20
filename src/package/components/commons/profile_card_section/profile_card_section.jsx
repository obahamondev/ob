import React from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';

import { styles } from './profile_card_section_styles';

const useStyles = createUseStyles(styles);

const ProfileCardSectionComponent = ({ children, customClasses = {} }) => {
    const classes = useStyles();
    return (
        <div className={cn(classes.container, customClasses.container)}>
            {children}
        </div>
    );
};

export const ProfileCardSection = ProfileCardSectionComponent;