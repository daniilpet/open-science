import { describe, expect, it } from "vitest";
import i18n from "./index";

describe("Russian plural forms", () => {
  it.each([
    [0, "0 пакетов"],
    [1, "1 пакет"],
    [2, "2 пакета"],
    [5, "5 пакетов"],
    [11, "11 пакетов"],
    [21, "21 пакет"],
    [22, "22 пакета"],
    [25, "25 пакетов"],
    [1.5, "1.5 пакета"],
  ])("renders %s packages", (count, expected) => {
    expect(i18n.t("hardware.packageCount", { lng: "ru", ns: "runs", count })).toBe(expected);
  });

  it("keeps the count when the singular form is used for twenty-one", () => {
    expect(i18n.t("tool.group.phrase.created", { lng: "ru", ns: "session", count: 21 }))
      .toBe("создан 21 файл");
  });

  it("renders export and scientific viewer counts in Russian", () => {
    expect(i18n.t("history.exportDone", { lng: "ru", ns: "nav", count: 22 }))
      .toBe("Экспортировано 22 разговора.");
    expect(i18n.t("molecule.atomCount", { lng: "ru", ns: "inspector", count: 5 }))
      .toBe("5 атомов");
  });
});
