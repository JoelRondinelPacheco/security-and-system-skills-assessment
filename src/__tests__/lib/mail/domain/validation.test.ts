import { isFromNameValid } from "@/lib/mail/domain/validations";
import { ensureIsFromNameValid } from "@/lib/mail/domain/validations";

describe("isFromNameValid", () => {
    it("should return true for valid name lengths", () => {
        expect(isFromNameValid("Joel")).toBe(true);
        expect(isFromNameValid("Joel Daniel")).toBe(true);
    });

    it("should return false for name shorter than 2 characters", () => {
        expect(isFromNameValid('')).toBe(false);
        expect(isFromNameValid('J')).toBe(false);
    })
    it("should return false for names longer than 100 characters", () => {
        const name = "Joel Daniel".repeat(11);
        expect(isFromNameValid(name)).toBe(false);
      });
})

describe("ensureIsFromNameValid", () => {
    it("should not throw an error for a valid name", () => {
      expect(() => ensureIsFromNameValid("Joel")).not.toThrow();
      expect(() => ensureIsFromNameValid("Joel Daniel valid name")).not.toThrow();
    });
  
    it("should throw an error for a name that is too short", () => {
      expect(() => ensureIsFromNameValid("J")).toThrow();
      expect(() => ensureIsFromNameValid("J")).toThrow("Nombre debe tener entre 2 y 100 carateres");
      expect(() => ensureIsFromNameValid("J")).toThrow(Error);
    });
  
    it("should throw an error for a name that is too long", () => {
      const name = "J".repeat(101);
      expect(() => ensureIsFromNameValid(name)).toThrow();
      expect(() => ensureIsFromNameValid(name)).toThrow("Nombre debe tener entre 2 y 100 carateres");
      expect(() => ensureIsFromNameValid(name)).toThrow(Error);
    });
  
    it("should throw an error for an empty string", () => {
      expect(() => ensureIsFromNameValid("")).toThrow("Nombre debe tener entre 2 y 100 carateres");
    });
  });
  
