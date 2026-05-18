export const ENTRYPOINT_SHELL_REQUIREMENTS = Object.freeze({
  commandRegistration: Object.freeze(["VHS-REQ-082", "VHS-REQ-083", "VHS-REQ-594"])
});

export function activate(context) {
  context.subscriptions.push(
    context.commands.registerCommand("labviewViHistory.open", openHandler)
  );
}

function openHandler() {
  // Entrypoint shell: blocked scope not started here.
  // Documentation rendering, runtime settings CLI materialization,
  // compare execution, Docker orchestration, packaging, and
  // Marketplace publication remain blocked until separately admitted.
}

export function allEntrypointShellRequirementIds() {
  return Object.freeze(
    Object.values(ENTRYPOINT_SHELL_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}
