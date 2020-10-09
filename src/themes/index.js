import main from './main';

const themeList = {
    main
};

function themes(style) {
    const defaultTheme = themeList[style] || themeList.main || {};
    return {
        ...defaultTheme,
    };
}

export default themes;
