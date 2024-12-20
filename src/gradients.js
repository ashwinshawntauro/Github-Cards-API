const {generateCssGradient} = require("./satori_renderer");

// Add gradient unique name here
const GradientConstants = {
    DARK_1: "dark_1",
    DARK_2: "dark_2",
    LIGHT: "light",
    RGB: "rgb",
    LEMONADE: "lemonade",
    GALAXY: "galaxy"
};

const generateGradient = async (grad_name, ctx, canvas, w) => {
    let background;
    // Add gradient here
    switch (grad_name) {
        case GradientConstants.DARK_1:
            // CSS Gradient
            background = await generateCssGradient("linear-gradient(to right, rgb(106, 17, 203), rgb(37, 117, 252));",w,canvas.height,ctx);
            return background;

        case GradientConstants.DARK_2:
            // SVG Gradient
            background = ctx.createLinearGradient(
                w / 2 - canvas.height >= 0 ? w / 2 - canvas.height : 0,
                canvas.height / 2,
                w / 2 + canvas.height,
                canvas.height >= 290 ? canvas.height - 290 : 0
            );
            background.addColorStop(0, "rgba(61, 51, 147, 1)");
            background.addColorStop(0.37, "rgba(43, 118, 185, 1)");
            background.addColorStop(0.65, "rgba(44, 172, 209, 1)");
            background.addColorStop(1, "rgba(53, 235, 147, 1)");
            return background;

        case GradientConstants.LIGHT:
            background = await generateCssGradient("linear-gradient(to bottom, rgb(42, 245, 152), rgb(0, 158, 253));",w,canvas.height,ctx);
            return background;

        case GradientConstants.RGB:
            background = generateCssGradient("linear-gradient(to right, rgb(255, 0, 0), rgb(0, 255, 0) 50%, rgb(0, 0, 255));",w,canvas.height,ctx);
            return background;

        case GradientConstants.LEMONADE:
            background = ctx.createLinearGradient(
                0,
                canvas.height / 2,
                w,
                canvas.height / 2
            );
            background.addColorStop(0, "rgba(171, 236, 54, 1)"); 
            background.addColorStop(0.49, "rgba(238, 219, 92, 1)"); 
            background.addColorStop(1, "rgba(249, 245, 75, 1)");
            return background;

        case GradientConstants.GALAXY:
            background = ctx.createLinearGradient(
                w / 2 - canvas.height >= 0 ? w / 2 - canvas.height : 0,
                canvas.height / 2,
                w / 2 + canvas.height,
                canvas.height >= 290 ? canvas.height - 290 : 0
            );

            background.addColorStop(0, "rgba(40, 40, 100, 1)");
            background.addColorStop(0.3, "rgba(70, 30, 100, 1)");
            background.addColorStop(0.6, "rgba(0, 0, 0, 1)");
            background.addColorStop(1, "rgba(20, 20, 50, 1)");
            
            ctx.fillStyle = background;
            ctx.fillRect(0, 0, w, canvas.height);

            for(let i = 0; i < 250; i++) {
                let xPos = Math.random() * w;
                let yPos = Math.random() * canvas.height;
                let alpha = 0.5 + Math.random() * 0.5;
                let size = Math.random() * 2;
            
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fillRect(xPos, yPos, size, size);
            }
            
            ctx.fillStyle = `rgba(255, 255, 255, 0)`;
            ctx.fillRect(0, 0, w, canvas.height);
    }
};
module.exports.GradientConstants = GradientConstants;
module.exports.generateGradient = generateGradient;