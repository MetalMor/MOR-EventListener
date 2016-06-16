/**
 * Funciones de utilidad
 * Created by mor on 16/06/16.
 */

var util = {
    obj: 'Object',
    arr: 'Array',
    func: 'Function',
    /**
     * Retorna si el objeto es del tipo especificado en base a su prototipo.
     * @param crit Tipo requerido
     * @param obj Objeto a comprobar
     * @returns {boolean}
     */
    type: function (crit, obj) {
        return Object.prototype.toString.call(obj) === '[object ' + crit + ']'
    },
    isUndefined: function(smth) {
        return util.strictEquals(typeof smth, 'undedfined');
    },
    strictEquals: function(one, other) {
        return one === other;
    }
};