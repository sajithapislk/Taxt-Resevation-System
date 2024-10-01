namespace tests.Helpers
{
    public static class TestDataGenerator
    {
        public static List<T> GenerateObjects<T>(int count = 0, int start = 1) where T : new()
        {
            var objects = new List<T>();
            for (int i = start; i <= count; i++)
            {
                objects.Add(GenerateObject<T>(i));
            }
            return objects;
        }

        public static TestAsyncEnumerable<T> GenerateAsyncEnumerable<T>(int count = 0, int start = 1) where T : new()
        {
            return new TestAsyncEnumerable<T>(GenerateObjects<T>(count, start));
        }

        public static T GenerateObject<T>(int value = 1) where T : new()
        {
            T obj = new();
            var properties = typeof(T).GetProperties();
            foreach (var property in properties)
            {
                if (property.CanWrite)
                {
                    var propertyType = Nullable.GetUnderlyingType(property.PropertyType) ?? property.PropertyType;

                    if (propertyType == typeof(int))
                    {
                        property.SetValue(obj, (int?)value);
                    }
                    else if (propertyType == typeof(string))
                    {
                        property.SetValue(obj, property.Name + value);
                    }
                    else if (propertyType == typeof(double))
                    {
                        property.SetValue(obj, (double?)value);
                    }
                    else if (propertyType == typeof(float))
                    {
                        property.SetValue(obj, (float?)value);
                    }
                    else if (propertyType == typeof(decimal))
                    {
                        property.SetValue(obj, (decimal?)value);
                    }
                    else if (propertyType == typeof(long))
                    {
                        property.SetValue(obj, (long?)value);
                    }
                    else if (propertyType == typeof(DateTime))
                    {
                        property.SetValue(obj, (DateTime?)DateTime.Now.AddDays(value));
                    }
                    else if (propertyType == typeof(bool))
                    {
                        property.SetValue(obj, (bool?)(value % 2 == 0));
                    }
                    // Add more types as needed
                }
            }
            return obj;
        }
    }

}
