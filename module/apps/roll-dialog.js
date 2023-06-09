export class DishonoredRollDialog {

    static async create(focusList) {
        // Grab the RollDialog HTML file/
        const template = "systems/dishonored/templates/apps/dicepool.html";
        const html = await renderTemplate(template, {focuses: focusList});
        // Create a new promise for the HTML above.
        return new Promise((resolve) => {
            let formData = null;
            // Create a new dialog.
            const dlg = new Dialog({
                title: game.i18n.localize("dishonored.apps.dicepoolwindow"),
                content: html,
                buttons: {
                    roll: {
                        label: game.i18n.localize("dishonored.apps.rolldice"),
                        callback: html => {
                            formData = new FormData(html[0].querySelector("#dice-pool-form"));
                            return resolve(formData);
                        }
                    }
                },
                default: "roll",
                close: () => {}
            });
            // Render the dialog
            dlg.render(true);
        });
    }
}