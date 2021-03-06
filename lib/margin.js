/**
 * Margin
 */
var directionalValues = require('./directional-values');

module.exports = function (decl, args) {
    args.shift();
    var decls = directionalValues('margin', '', args);
    var aux = decl;

    decls.forEach( function (i) {
        aux.append({
            prop: i.prop,
            value: i.value,
            source: decl.source
        });
    });

    decl.replaceWith(aux.nodes);
};
