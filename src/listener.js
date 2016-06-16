/**
 * Event listener. Me aburria.
 * TODO eventos: cambiar la estructura de lista a estructura de árbol asociativo
 * TODO errores: agregar control de errores, si por lo que fuera no se tira un callback, que tire otra funcion opcional
 * Created by mor on 16/06/16.
 */

var listener = {
    /**
     * Lista de objetos evento.
     */
    events: [],
    /**
     * Añade un nuevo efecto a un evento.
     * @param eventId Identificador string del evento.
     * @param callback Funcion que disparará.
     */
    listen: function(eventId, callback) {
        listener.addEvent(listener.newEvent(eventId, callback));
    },
    /**
     * Retorna un objeto evento.
     * @param eventId
     * @param callback
     * @returns {event}
     */
    newEvent: function(eventId, callback) {
        var ev;
        return ev = {
            /**
             * Identificador string del evento.
             */
            id: listener.events.length + 1,
            /**
             * Identificador string  del grupo de eventos.
             */
            event: event,
            /**
             * Función que dispara el evento.
             */
            callback: callback,
            /**
             * Valida si la propiedad callback es una función, y en ese caso la llama.
             */
            throw: function() {
                if (util.type(util.func, ev.callback))
                    ev.callback();
                else console.log('[listener] callback '+ev.id+' not a function');
            }
        }
    },
    /**
     * Añade un objeto evento enviado por parámetro a la lista general de eventos.
     * @param ev Objeto evento a añadir.
     */
    addEvent: function(ev) {
        listener.events.push(ev);
    },
    /**
     * Llama a todos los callbacks correspondientes a un grupo de eventos.
     * @param id Identificador string del grupo de eventos.
     */
    throwEvent: function(id) {
        var events = listener.events;
        events.forEach(function(ev) {
            if(util.isUndefined(ev.event))
                listener.throwCallback(ev.callback);
            else if (util.strictEquals(id, ev.event)) {
                listener.throw(ev);
            }
        });
    },
    /**
     * Llama al callback enviado por parámetro.
     * @param ev Objeto evento.
     */
    throw: function(ev) {
        ev.throw();
    }
};