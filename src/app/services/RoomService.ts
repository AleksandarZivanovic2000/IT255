export class RoomService{
    getPrice(numberOfNights: number): number {
        // Logika za izračunavanje cene na osnovu broja noći za MetHotel
        // Implementirati odgovarajući algoritam za izračunavanje cene
        // Na primer, možete koristiti fiksnu cenu po noći za sobu
        const pricePerNight = 100; // Zamijenite sa odgovarajućom logikom
        return pricePerNight * numberOfNights;
      }
    }