import { ExecutionMethod } from "appwrite";
import { getAppwriteConfig, getAppwriteInstances } from "./appwrite";

// 1. Fonction de PING (à appeler au onMount de la page d'invitation)
export async function warmUpFunctions() {
  try {
    const { functions } = await getAppwriteInstances();

    // Mode asynchrone (async: true) pour ne pas bloquer l'UI
    await functions.createExecution({
      functionId: "users_teams_manager", // ID de la fonction
      body: JSON.stringify({ action: "ping" }),
      async: true,
    });
  } catch (e) {
    console.warn("Warmup failed", e);
  }
}

// 2. Fonction d'INVITATION
export async function inviteUsers(
  teamId: string,
  emails: string[],
  message: string,
) {
  const body = JSON.stringify({
    action: "invite",
    teamId,
    emails,
    message,
  });

  const { functions } = await getAppwriteInstances();
  const response = await functions.createExecution({
    functionId: "users_teams_manager",
    body: body,
    async: false, // async: false car on veut attendre le résultat (succès/erreur)
  });

  const result = JSON.parse(response.responseBody);
  if (!result.success) throw new Error(result.error);

  return result;
}
