const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { SwaggerTheme } = require('swagger-themes');
const YAML = require('yamljs');
const swaggerJsDocs = YAML.load("src/api/v1/docs/docs.yaml");
const path = require('path');

const app = express();
const theme = new SwaggerTheme('v3');

const options = {
  explorer: true,
  customCss: 
  `${theme.getBuffer('newspaper')}
    .swagger-ui .topbar { display: none !important; }`
};

function setupSwagger(app, PORT) {
  app.use(`/api/v1/docs/`, swaggerUi.serve, swaggerUi.setup(swaggerJsDocs, options));
  console.log(`Swagger UI is available at http://localhost:${PORT}/api/v1/docs/`);
}

module.exports = setupSwagger;


//classic
//feeling-blue
//dark
//flattop
//material
//monokai
//muted
//newspaper
//outline


