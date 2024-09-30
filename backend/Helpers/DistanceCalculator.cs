using NetTopologySuite.Geometries;

namespace backend.Helpers
{
    public static class DistanceCalculator
    {
        public static double HaversineDistance(double lat1, double lon1, double lat2, double lon2)
        {
            const double R = 6371e3; // Earth's radius in meters
            var latRad1 = Math.PI * lat1 / 180;
            var lonRad1 = Math.PI * lon1 / 180;
            var latRad2 = Math.PI * lat2 / 180;
            var lonRad2 = Math.PI * lon2 / 180;

            var dLat = latRad2 - latRad1;
            var dLon = lonRad2 - lonRad1;

            var a = Math.Sin(dLat / 2) * Math.Sin(dLat / 2) +
                    Math.Cos(latRad1) * Math.Cos(latRad2) *
                    Math.Sin(dLon / 2) * Math.Sin(dLon / 2);

            var c = 2 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1 - a));
            return R * c; // Returns distance in meters
        }

        public static double GetExactDistance(Point location1, Point location2)
        {
            double lat1 = location1.Y;  // Latitude
            double lon1 = location1.X;  // Longitude
            double lat2 = location2.Y;
            double lon2 = location2.X;

            // Use the Haversine formula for calculating the distance in meters
            return HaversineDistance(lat1, lon1, lat2, lon2) / 1000;  // Convert meters to kilometers
        }

    }
}
