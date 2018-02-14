import tinycolor from 'tinycolor2';

const themes = {
    Default: {
        backgroundColor: tinycolor(`#1a373e`).toHsl(),
        barColor: '#191c2b',
        ctaColor: `#f6d001`,
        positiveColor: tinycolor(`#9DFFAF`).toHsl(),
        negativeColor: tinycolor(`#F7D002`).toHsl(),
        extraColor: tinycolor(`#88D4FF`).toHsl(),
        secondaryBarColor: 'white',
        secondaryBackgroundColor: 'white',
        secondaryCtaColor: '#1a373e',
        ctaBorderColor: 'transparent',
        pendingColor: '#f75602',
        chartLineColorPrimary: '#FFA25B',
        chartLineColorSecondary: '#FFA25B',
    },
    Contemporary: {
        backgroundColor: tinycolor(`#EAEDF3`).toHsl(),
        barColor: `#181C2B`,
        ctaColor: `#862888`,
        positiveColor: tinycolor(`#007353`).toHsl(),
        negativeColor: tinycolor(`#DA8F0F`).toHsl(),
        extraColor: tinycolor(`#007353`).toHsl(),
        secondaryBarColor: 'white',
        secondaryBackgroundColor: 'black',
        secondaryCtaColor: 'white',
        ctaBorderColor: 'transparent',
        pendingColor: '#f75602',
        chartLineColorPrimary: '#6439A9',
        chartLineColorSecondary: '#6439A9',
    },
    Grey: {
        backgroundColor: tinycolor(`#313131`).toHsl(),
        barColor: `#1a1a1a`,
        ctaColor: `#009f3f`,
        positiveColor: tinycolor(`#9DFFAF`).toHsl(),
        negativeColor: tinycolor(`#F7D002`).toHsl(),
        extraColor: tinycolor(`#88D4FF`).toHsl(),
        secondaryBarColor: 'white',
        secondaryBackgroundColor: 'white',
        secondaryCtaColor: 'white',
        ctaBorderColor: 'transparent',
        pendingColor: '#f75602',
        chartLineColorPrimary: '#FFA25B',
        chartLineColorSecondary: '#FFA25B',
    },
    Blue: {
        backgroundColor: tinycolor(`#20303f`).toHsl(),
        barColor: `#121c24`,
        ctaColor: `#009f3f`,
        positiveColor: tinycolor(`#9DFFAF`).toHsl(),
        negativeColor: tinycolor(`#F7D002`).toHsl(),
        extraColor: tinycolor(`#88D4FF`).toHsl(),
        secondaryBarColor: 'white',
        secondaryBackgroundColor: 'white',
        secondaryCtaColor: 'white',
        ctaBorderColor: 'transparent',
        pendingColor: '#f75602',
        chartLineColorPrimary: '#FFA25B',
        chartLineColorSecondary: '#FFA25B',
    },
    Light: {
        backgroundColor: tinycolor(`white`).toHsl(),
        barColor: `white`,
        ctaColor: `white`,
        positiveColor: tinycolor(`black`).toHsl(),
        negativeColor: tinycolor(`#black`).toHsl(),
        extraColor: tinycolor(`#black`).toHsl(),
        secondaryBarColor: 'black',
        secondaryBackgroundColor: 'black',
        secondaryCtaColor: 'black',
        ctaBorderColor: 'black',
        pendingColor: '#f75602',
        chartLineColorPrimary: 'black',
        chartLineColorSecondary: 'black',
    },
    Dark: {
        backgroundColor: tinycolor(`black`).toHsl(),
        barColor: `black`,
        ctaColor: `black`,
        positiveColor: tinycolor(`#9DFFAF`).toHsl(),
        negativeColor: tinycolor(`#F7D002`).toHsl(),
        extraColor: tinycolor(`#88D4FF`).toHsl(),
        secondaryBarColor: 'white',
        secondaryBackgroundColor: 'white',
        secondaryCtaColor: 'white',
        ctaBorderColor: 'white',
        pendingColor: '#f75602',
        chartLineColorPrimary: 'white',
        chartLineColorSecondary: 'white',
    },
};
/* Simple: {
        backgroundColor: tinycolor(`#D9D9D9`).toHsl(),
        barColor: tinycolor(`#1A1A1A`).toHsl(),
        ctaColor: tinycolor(`#009f3f`).toHsl(),
        positiveColor: tinycolor(`#9DFFAF`).toHsl(),
        negativeColor: tinycolor(`#57A2CB`).toHsl(),
        extraColor: tinycolor(`#88D4FF`).toHsl(),
        secondaryBarColor: 'white',
        secondaryBackgroundColor: 'black',
        secondaryCtaColor: 'white',
        ctaBorderColor: 'transparent',
        pendingColor: '#f75602',
        chartLineColor: 'black',
    }, */
/* Custom: {
        backgroundColor: tinycolor(`#1a373e`).toHsl(),
        barColor: tinycolor(`#0b282f`).toHsl(),
        ctaColor: tinycolor(`#009f3f`).toHsl(),
        positiveColor: tinycolor(`#9DFFAF`).toHsl(),
        negativeColor: tinycolor(`#F7D002`).toHsl(),
        extraColor: tinycolor(`#88D4FF`).toHsl(),
        secondaryBarColor: 'white',
        secondaryBackgroundColor: 'white',
        secondaryCtaColor: 'white',
        ctaBorderColor: 'transparent',
        pendingColor: '#f75602',
        chartLineColor: 'white',
    }, */

const getHSL = (color) => {
    return tinycolor(color).toHslString();
};

export default {
    themes,
    getHSL,
};
