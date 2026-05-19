export const ENTRYPOINT_SHELL_REQUIREMENTS = Object.freeze({
  commandRegistration: Object.freeze(["VHS-REQ-082", "VHS-REQ-083", "VHS-REQ-594"])
});

export const DOCUMENTATION_COMMAND_REQUIREMENTS = Object.freeze({
  bundledDocs: Object.freeze(["VHS-REQ-368"]),
  commandSurface: Object.freeze(["VHS-REQ-369", "VHS-REQ-594"]),
  publicSafety: Object.freeze(["VHS-REQ-489"])
});

export const RUNTIME_SETTINGS_CLI_BOOTSTRAP_REQUIREMENTS = Object.freeze({
  terminalEntrypoint: Object.freeze(["VHS-REQ-537", "VHS-REQ-594"]),
  recoveryFacts: Object.freeze(["VHS-REQ-544"]),
  blockedMutation: Object.freeze(["VHS-REQ-537", "VHS-REQ-544"])
});

export const BUNDLED_DOCUMENTATION_MANIFEST_PATH = "docs/installed-user/bundled-docs-manifest.json";

export const BUNDLED_DOCUMENTATION_MANIFEST = Object.freeze({
  schema: "vi-history/bundled-documentation-manifest@v1",
  manifestVersion: 1,
  pages: Object.freeze([
    Object.freeze({
      id: "getting-started",
      title: "Getting Started",
      path: "docs/installed-user/getting-started.md"
    })
  ])
});

export function activate(context) {
  context.subscriptions.push(
    context.commands.registerCommand("labviewViHistory.open", openHandler)
  );
  context.subscriptions.push(
    context.commands.registerCommand("labviewViHistory.openDocumentation", openDocumentationHandler)
  );
  context.subscriptions.push(
    context.commands.registerCommand(
      "labviewViHistory.prepareLocalRuntimeSettingsCli",
      prepareLocalRuntimeSettingsCliHandler
    )
  );
}

function openHandler() {
  // Entrypoint shell: blocked scope not started here.
  // Runtime settings CLI materialization, compare execution, Docker
  // orchestration, and Marketplace publication remain blocked here. Local VSIX
  // artifact packaging is governed separately from runtime command handlers.
}

function openDocumentationHandler() {
  return createDocumentationCommandPanelShell();
}

function prepareLocalRuntimeSettingsCliHandler() {
  return createRuntimeSettingsCliPrepareCommandShell();
}

export function createDocumentationCommandPanelShell() {
  return {
    type: "documentation-panel-shell",
    commandId: "labviewViHistory.openDocumentation",
    manifestPath: BUNDLED_DOCUMENTATION_MANIFEST_PATH,
    pages: BUNDLED_DOCUMENTATION_MANIFEST.pages,
    blockedSideEffects: Object.freeze({
      git: false,
      labviewCli: false,
      docker: false,
      compareExecution: false,
      runtimeSettingsCli: false,
      packaging: false,
      marketplace: false
    }),
    requirementIds: allDocumentationCommandRequirementIds()
  };
}

export function createRuntimeSettingsCliPrepareCommandShell() {
  return {
    type: "runtime-settings-cli-prepare-command-shell",
    commandId: "labviewViHistory.prepareLocalRuntimeSettingsCli",
    launcher: Object.freeze({
      entrypoint: "vihs",
      materialization: "extension-managed-terminal-bootstrap",
      status: "prepared",
      prebuiltExternalCliPayload: false
    }),
    recovery: Object.freeze({
      missingLauncher: "rerun labviewViHistory.prepareLocalRuntimeSettingsCli",
      staleLauncher: "rerun labviewViHistory.prepareLocalRuntimeSettingsCli",
      hiddenPathReconstructionRequired: false,
      profileEditingRequired: false,
      adminElevationRequired: false,
      machineWideInstallRequired: false
    }),
    blockedSideEffects: Object.freeze({
      settingsMutation: false,
      jsoncSettingsRewrite: false,
      runtimeValidation: false,
      compareExecution: false,
      labviewCli: false,
      docker: false,
      packaging: false,
      marketplace: false
    }),
    requirementIds: allRuntimeSettingsCliBootstrapRequirementIds()
  };
}

export function allEntrypointShellRequirementIds() {
  return Object.freeze(
    Object.values(ENTRYPOINT_SHELL_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}

export function allDocumentationCommandRequirementIds() {
  return Object.freeze(
    Object.values(DOCUMENTATION_COMMAND_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}

export function allRuntimeSettingsCliBootstrapRequirementIds() {
  return Object.freeze(
    Object.values(RUNTIME_SETTINGS_CLI_BOOTSTRAP_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}
