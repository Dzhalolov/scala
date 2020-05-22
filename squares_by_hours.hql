SELECT * FROM pollution
JOIN legend ON pollution.sensor_id = legend.sensor_id
WHERE pollution.sensor_id IN(
SELECT sensor_id FROM (SELECT square_id, SUM(sms_in_activity) + SUM(sms_out_activity) + SUM(call_in_activity) + SUM(call_out_activity) + SUM(internet_traffic_activity) aggreg_final
FROM telec
WHERE time_interval REGEXP '\S* 1[012567]\S*|\S* 09\S*' and time_interval NOT REGEXP '\S*?-11-01 \S*|\S*?-12-2[56] \S*'
GROUP BY square_id) temp_table
WHERE aggreg_final > 434788.72497250314
)

