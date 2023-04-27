from datetime import datetime
import time
import pandas as pd

import MetaTrader5 as mt5
# mt5.initialize("C:/Program Files/MetaTrader 5/terminal64.exe", login=5012624098, password="lr2zearc", server="MetaQuotes-Demo")
mt5.initialize()
print("pooped 1")
# logged = mt5.login(login=68801789, password="ucljd3sp", server="MetaQuotes-Demo")
logged = mt5.login(login=11168071, password="singf0as", server="AeronLimited-Server")

if logged:
    print("Connected: Connecting to MT5 Client")
else:
    print(logged)
if not mt5.initialize():
    print("initialize() failed, error code =", mt5.last_error())
    quit()


# get all symbols
symbols = mt5.symbols_get()
print('Symbols: ', len(symbols))
count = 0
# display the first five ones
for s in symbols:
    count += 1
    print("{}. {}".format(count, s.name))
    if count == 5: break
print()

# get symbols containing RU in their names
ru_symbols = mt5.symbols_get("*RU*")
print('len(*RU*): ', len(ru_symbols))
for s in ru_symbols:
    print(s.name)
print()

# get symbols whose names do not contain USD, EUR, JPY and GBP
group_symbols = mt5.symbols_get(group="*,!*USD*,!*EUR*,!*JPY*,!*GBP*")
print('len(*,!*USD*,!*EUR*,!*JPY*,!*GBP*):', len(group_symbols))
for s in group_symbols:
    print(s.name, ":", s)

# shut down connection to the MetaTrader 5 terminal
mt5.shutdown()