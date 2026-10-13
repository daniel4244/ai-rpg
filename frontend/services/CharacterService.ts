import { CreateCharacterRequest } from "../interface/CreateCharacterRequest";
import { CreateCharacterResponse } from "../interface/CreateCharacterResponse";

export async function postCharacterDraft(
  characterDraft: CreateCharacterRequest,
): Promise<CreateCharacterResponse> {
  const response = await fetch("http://localhost:3000/characters", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(characterDraft),
  });
  if (!response.ok) throw new Error("Não foi possível criar o characterDraft.");
  return response.json();
}
