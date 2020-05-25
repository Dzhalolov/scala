 select *, dense_rank() OVER (ORDER BY sensor_lat, sensor_long) from legend;
