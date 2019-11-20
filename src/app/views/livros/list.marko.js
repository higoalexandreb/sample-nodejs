// Compiled using marko@4.18.25 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/sample-nodejs$1.0.0/src/app/views/livros/list.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pt-br\"><head><title>Sample NodeJS</title><meta charset=\"utf-8\"></head><body>");

  component_globals_tag({}, out);

  out.w("<table id=\"clientes\"><tr><th>Titulo</th><th>Descricao</th><th>Preco</th></tr>");

  var $for$0 = 0;

  marko_forEach(data.livros, function(livro) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(livro.titulo) +
      "</td><td>" +
      marko_escapeXml(livro.descricao) +
      "</td><td>" +
      marko_escapeXml(livro.preco) +
      "</td></tr>");
  });

  out.w("</table>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "14");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/sample-nodejs$1.0.0/src/app/views/livros/list.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
